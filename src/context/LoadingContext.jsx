import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react'
import DBContext from '../app/DBContext.jsx'
import skeletonData from '../speedpicks/skeletonData.json'
import AuthContext from '../app/AuthContext.jsx'
import useData from '../util/useData'
import {locksData, jsonBackup} from '../data/dataUrls'
import DBContextSP from '../speedpicks/DBContextSP.jsx'

const LoadingContext = React.createContext({})
const urls = {locksData, jsonBackup}

export function LoadingProvider({children}) {
    const {data, loading, error} = useData({urls})
    const {locksData, jsonBackup} = data || {}
    const jsonLoaded = (!loading && !error && !!data)

    const {authLoaded} = useContext(AuthContext)
    const {getDbProfiles} = useContext(DBContext)
    const {getDbEntries} = useContext(DBContextSP)

    //const dbUser = isLoggedIn
    const dbUser = authLoaded

    const [dbEntries, setDbEntries] = useState(null)
    const [dbProfiles, setDbProfiles] = useState(null)
    const [jsonEntries, setJsonEntries] = useState(null)
    const [jsonProfiles, setJsonProfiles] = useState(null)

    const willNeedJson = !dbUser && jsonLoaded
    const allDataLoaded = ((authLoaded && !dbUser && !!jsonEntries && !!jsonProfiles) || (authLoaded && dbUser && !!dbEntries && !!dbProfiles))

    const refreshData = useCallback(async () => {
        console.log('start refreshData')
        if (authLoaded && dbUser) {
            console.log('REFRESHDATA: using dbEntries')
            const newDbEntries = await getDbEntries()
            setDbEntries(newDbEntries)
            const newDbProfiles = await getDbProfiles()
            setDbProfiles(newDbProfiles.profiles)
        } else if (authLoaded && jsonLoaded) {
            console.log('REFRESHDATA: using jsonEntries')
            const jsonEntriesMap = jsonBackup?.__collections__.speedPicks
            setJsonEntries(Object.keys(jsonEntriesMap).map(key => ({key, ...jsonEntriesMap[key]})))

            const jsonProfilesMap = jsonBackup?.__collections__.profiles
            setJsonProfiles(Object.keys(jsonProfilesMap).map(key => {
                const profile = jsonProfilesMap[key]
                profile.userId = key
                return profile
            }))
        }
    }, [dbUser, getDbEntries, getDbProfiles, willNeedJson]) // eslint-disable-line

    // Initial data load
    useEffect(() => {
        refreshData()
    }, [refreshData])

    const allEntries = !allDataLoaded ? skeletonData.entry
        : dbUser ? dbEntries
            : jsonEntries

    const allProfiles = !allDataLoaded ? skeletonData.profile
        : dbUser ? dbProfiles
            : jsonProfiles

    const skeletonLocks = skeletonData.lock
    const allLocks = jsonLoaded ? locksData : skeletonLocks

    const value = useMemo(() => ({
        allEntries,
        allProfiles,
        allLocks,
        allDataLoaded,
        refreshData
    }), [
        allEntries,
        allProfiles,
        allLocks,
        allDataLoaded,
        refreshData
    ])

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContext
