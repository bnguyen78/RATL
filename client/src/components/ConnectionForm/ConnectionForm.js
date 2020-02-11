import React, { useState, useContext } from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import JobCardContext from '../../utils/JobCardContext'
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Tooltip from '@material-ui/core/Tooltip'

import PersonAddIcon from '@material-ui/icons/PersonAdd';



const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  card: {
    maxWidth: 490,
  },
  pos: {
    margin: 10
  },
  button: {
    padding: 3

  }
}))

const ConnectionForm = (props) => {

  const classes = useStyles()
  const { jobs, namee, email, phone, type, handleInputChange, handleAddConnection } = useContext(JobCardContext)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Tooltip title="Add Connection">
      <Button
        onClick={() => handleShow()}
        className={classes.button}
      ><PersonAddIcon/></Button>
      </Tooltip>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={classes.root} noValidate autoComplete="off">

            <Tooltip title="Example: Hiring Manager">
              <TextField
                size="small"
                id="outlined-basic"
                label="Connection Type"
                variant="outlined"
                name="type"
                value={type}
                onChange={handleInputChange} />
            </Tooltip>

            <TextField
              size="small"
              id="outlined-basic"
              label="Connection's Name"
              variant="outlined"
              name="namee"
              value={namee}
              onChange={handleInputChange} />

            <TextField
              size="small"
              id="outlined-basic"
              label="Connection's Phone"
              variant="outlined"
              name="phone"
              value={phone}
              onChange={handleInputChange} />

            <TextField
              size="small"
              id="outlined-basic"
              label="Connection's Email"
              variant="outlined"
              name="email"
              value={email}
              onChange={handleInputChange} />



          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() =>
            handleAddConnection(props.jobId)
          }
          >Submit</Button>

        </Modal.Footer>
      </Modal>


    </>
  )
}
export default ConnectionForm