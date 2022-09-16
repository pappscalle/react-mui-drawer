import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import './App.css'
import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb'

const items = ['First item', 'Second item', 'Loooooooong item']

const App = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              onClick={() => toggleDrawer()}
              size="large"
              color="inherit"
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <AdbIcon />

            {items.map((text, index) => (
              <Button key={text} color="inherit">
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Typography paragraph>Hello world!!</Typography>
      <Drawer anchor="left" open={open}>
        <List>
          {items.map((text, index) => (
            <ListItem key={text}>
              <ListItemButton onClick={() => toggleDrawer()}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        faucibus urna id cursus vehicula. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Vivamus bibendum
        neque vitae varius consequat. Vestibulum at arcu tellus. In consectetur
        nibh id feugiat dictum. Vivamus ultricies eleifend nisl sed interdum.
        Donec rhoncus finibus nisi sed scelerisque. Donec malesuada leo id est
        efficitur bibendum. Sed dolor quam, vestibulum ut euismod at, finibus ut
        massa. Etiam at laoreet diam. Vestibulum eget elementum nunc, sed
        aliquet ipsum. Phasellus placerat tortor eget felis pulvinar ornare.
        Fusce tortor ex, fermentum ut nunc molestie, scelerisque maximus mi.
        Morbi non ex sed elit gravida ornare. Pellentesque quis nulla augue.
        Phasellus consectetur, dui in rutrum feugiat, est diam molestie nunc,
        viverra scelerisque diam tortor vel tellus. Quisque diam risus, luctus
        in mollis sit amet, finibus eu tellus. Integer id mauris rutrum, sodales
        leo sit amet, convallis risus. Praesent a nunc porttitor, pretium elit
        sit amet, dictum urna. Nulla ac placerat augue, et rutrum est. Etiam a
        justo at dolor accumsan consectetur sed eget lorem. Aenean nec tortor
        convallis, egestas nulla ac, gravida sapien. Suspendisse lacinia commodo
        semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim lorem quis est commodo, a rutrum justo tempor. Suspendisse
        ornare magna vitae purus interdum dapibus. Aliquam congue, tellus sit
        amet efficitur aliquam, augue leo bibendum diam, sit amet efficitur
        massa ligula sit amet erat. Cras vitae porta nibh, scelerisque luctus
        lorem. Vestibulum aliquet tristique ipsum vitae placerat. Mauris varius
        diam ipsum, sed tincidunt sapien condimentum ut. Praesent tempor metus
        vulputate turpis iaculis tempor. Maecenas sit amet dui sit amet massa
        euismod ornare. Ut placerat hendrerit augue, id aliquam erat venenatis
        at. Curabitur laoreet erat et nulla convallis mollis. Duis tristique
        elit lectus. In non elit quis arcu pellentesque ultricies in in nulla.
        Cras ligula velit, aliquam ac quam ut, pharetra tempor velit. Praesent
        vel augue eu lorem consequat feugiat vel non tortor. Fusce ultrices
        tellus turpis, in congue urna venenatis ut. Donec cursus, dolor a
        commodo consectetur, tellus dolor aliquam velit, id viverra quam nunc
        sit amet orci. Mauris libero lorem, sagittis consectetur orci accumsan,
        feugiat efficitur magna. Quisque nec tincidunt elit. Mauris sollicitudin
        dapibus felis lobortis ultrices. Sed consequat pulvinar massa, euismod
        condimentum nulla. Duis eu hendrerit arcu, in bibendum quam. Fusce
        varius arcu id velit commodo semper. Donec sem lectus, sagittis nec
        faucibus ut, posuere id dui. Aliquam ante quam, lobortis at vulputate
        ut, molestie nec leo. In eu varius odio. Suspendisse euismod ipsum nec
        pretium rutrum. Aenean eu suscipit sem. Maecenas pulvinar elit arcu,
        vitae commodo turpis elementum vitae. Curabitur sit amet purus aliquet,
        dictum libero et, tristique mi. Phasellus vel odio vitae est dictum
        luctus. Ut accumsan vestibulum libero, sed interdum risus sodales eget.
        Praesent vitae sollicitudin leo. Sed ac suscipit eros, sit amet rhoncus
        risus. Nunc tincidunt mollis eros a rutrum.
      </Typography>
    </>
  )
}

export default App
