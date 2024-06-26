import React, {useCallback} from 'react'
import IconButton from '@mui/material/IconButton'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Tooltip from '@mui/material/Tooltip'
import {enqueueSnackbar} from 'notistack'

function CopyEntryTextButton({entry, fontSize}) {
    const handleClick = useCallback(async () => {
        const text = entry.makeModels
            .map(({make, model}) => {
                return make && make !== model ? `${make} ${model}` : model
            }).join('\n')
        await navigator.clipboard.writeText(text)
        enqueueSnackbar('Make/Model text copied to clipboard.')
    }, [entry.makeModels])

    return (
        <Tooltip title='Copy Make/Model Text' arrow disableFocusListener>
            <IconButton onClick={handleClick} style={{height:40, width:40}}>
                <ContentCopyIcon fontSize={fontSize}/>
            </IconButton>
        </Tooltip>
    )
}

export default CopyEntryTextButton
