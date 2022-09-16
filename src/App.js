import React, { useState } from 'react'
import './App.css'
import {
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material'
import { Box } from '@mui/system'

const App = () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <>
            <Typography>Hello world!!</Typography>
            <Button onClick={() => toggleDrawer()}>Click me!</Button>
            <Drawer anchor="left" open={open}>
                <Box onClick={() => toggleDrawer()}>
                    <List>
                        {['Inbox', 'Send email', 'Drafts'].map(
                            (text, index) => (
                                <ListItem key={text}>
                                    <ListItemButton
                                        onClick={() => toggleDrawer()}
                                    >
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        )}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default App
