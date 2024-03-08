import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            enableBackground: "new 0 0 150 150",
        }}
        viewBox="0 0 150 150"
        {...props}
    >
        <path d="M148 2v146H2V2h146m2-2H0v150h150V0z" />
        <path d="M47.3 97.7h38.2v12.4H32.9V24.3h14.4v73.4zM84.4 47.9h8V34.2h13.2v13.7h13.2v11.4h-13.2v28.5c0 7.2 1.1 10.3 8.1 10.3h5.1V110h-6.1c-14.9 0-20.3-5.1-20.3-19.8v-31h-8V47.9zM20.6 137.5h4.6v1.1h-5.8v-9.7h1.2v8.6zM32.1 135.5c0 1.8-.9 3.2-2.9 3.2-1.9 0-2.9-1.2-2.9-3.2v-.9c0-2 1.1-3.1 2.9-3.1s2.9 1.1 2.9 3.1v.9zm-1.1 0v-.9c0-1.3-.6-2.1-1.8-2.1-1.1 0-1.8.8-1.8 2.1v.9c0 1.2.5 2.2 1.8 2.2 1.2 0 1.8-1 1.8-2.2zM39.2 137.5c-.4.8-1.3 1.2-2.4 1.2-1.9 0-3-1.2-3-3.2v-.9c0-2 1.1-3.1 3-3.1 1.1 0 1.9.4 2.4 1.1l-.9.6c-.3-.4-.9-.7-1.5-.7-1.2 0-1.9.8-1.9 2.1v.9c0 1.2.6 2.2 1.9 2.2.7 0 1.3-.2 1.6-.8l.8.6zM46.3 131.6l-3 3.1 3.5 3.9h-1.5l-2.8-3.1-.5.5v2.6h-1.1v-9.7H42v5.5l2.8-2.9 1.5.1zM54.5 128.9v1.1h-2.9v8.6h-1.2V130h-2.9v-1.1h7zM59.6 133.1c-.3-.4-.7-.6-1.2-.6-.9 0-1.5.6-1.5 1.7v4.4h-1.1v-7h1.1v.7c.3-.5.8-.8 1.6-.8 1 0 1.6.3 2 1l-.9.6zM64 134.5h1.7v-.8c0-1-.5-1.2-1.6-1.2-.8 0-1.3.1-1.7.7l-.8-.6c.5-.8 1.2-1.2 2.5-1.2 1.8 0 2.7.6 2.7 2.3v4.9h-1.1v-.7c-.4.6-.9.8-1.8.8-1.6 0-2.5-.8-2.5-2.2 0-1.5 1.1-2 2.6-2zm1.7 1H64c-1.1 0-1.5.4-1.5 1.1 0 .8.6 1.1 1.4 1.1 1 0 1.8-.2 1.8-1.8v-.4zM74.3 137.5c-.4.8-1.3 1.2-2.4 1.2-1.9 0-3-1.2-3-3.2v-.9c0-2 1.1-3.1 3-3.1 1.1 0 1.9.4 2.4 1.1l-.9.6c-.3-.4-.9-.7-1.5-.7-1.2 0-1.9.8-1.9 2.1v.9c0 1.2.6 2.2 1.9 2.2.7 0 1.3-.2 1.6-.8l.8.6zM81.4 131.6l-3 3.1 3.5 3.9h-1.5l-2.8-3.1-.4.5v2.6H76v-9.7h1.1v5.5l2.8-2.9 1.5.1zM88 137.5c-.5.9-1.2 1.2-2.5 1.2-1.9 0-3-1.2-3-3.2v-.9c0-2 .9-3.1 2.8-3.1 1.8 0 2.8 1.1 2.8 3.1v.7h-4.4v.2c0 1.2.6 2.2 1.8 2.2.9 0 1.4-.3 1.7-.8l.8.6zm-4.3-3.2H87c-.1-1.2-.6-1.9-1.6-1.9-1.1.1-1.6.8-1.7 1.9zM94.1 133.1c-.3-.4-.7-.6-1.2-.6-.9 0-1.5.6-1.5 1.7v4.4h-1.1v-7h1.1v.7c.3-.5.8-.8 1.6-.8 1 0 1.6.3 2 1l-.9.6zM100.3 133.2c-.4-.5-.8-.7-1.7-.7-.8 0-1.4.3-1.4.9 0 .8.7 1 1.6 1.1 1.3.1 2.5.5 2.5 2.1 0 1.2-.8 2.1-2.6 2.1-1.4 0-2.2-.4-2.7-1.2l.8-.6c.4.5.9.7 1.9.7.9 0 1.5-.4 1.5-1 0-.8-.4-1-1.8-1.1-1.2-.1-2.3-.6-2.3-2.1 0-1.2.8-2 2.5-2 1.1 0 2 .3 2.5 1.2l-.8.6zM105 138.6h-1.6V137h1.6v1.6zM112.3 137.5c-.4.8-1.3 1.2-2.4 1.2-1.9 0-3-1.2-3-3.2v-.9c0-2 1.1-3.1 3-3.1 1.1 0 1.9.4 2.4 1.1l-.9.6c-.3-.4-.9-.7-1.5-.7-1.2 0-1.9.8-1.9 2.1v.9c0 1.2.6 2.2 1.9 2.2.7 0 1.3-.2 1.6-.8l.8.6zM119.5 135.5c0 1.8-.9 3.2-2.9 3.2-1.9 0-2.9-1.2-2.9-3.2v-.9c0-2 1.1-3.1 2.9-3.1s2.9 1.1 2.9 3.1v.9zm-1.1 0v-.9c0-1.3-.6-2.1-1.8-2.1s-1.8.8-1.8 2.1v.9c0 1.2.5 2.2 1.8 2.2 1.2 0 1.8-1 1.8-2.2zM121.5 131.6h1.1v.7c.3-.5.8-.8 1.7-.8.9 0 1.7.4 2 1.1.5-.7 1.2-1.1 2.1-1.1 1.5 0 2.4.9 2.4 2.7v4.4h-1.1v-4.4c0-1.3-.6-1.7-1.5-1.7s-1.6.7-1.6 1.7v4.4h-1.1v-4.4c0-1.3-.6-1.7-1.5-1.7s-1.6.7-1.6 1.7v4.4h-1.1v-7h.2z" />
    </svg>
)
export default SvgComponent
