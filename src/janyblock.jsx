import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'

import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import NxButton from '../../../global/ui/buttons/NxButton'

import GroupList from './GroupList'
import UserList from './UserList'

import GroupDialog from './GroupDialog'
import GroupDialogStore from './GroupDialogStore'

const UserGroupContainer = observer(() => {
  const [tab, setTab] = useState('users')

  return (
    <React.Fragment>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Select value={tab} onChange={e => setTab(e.target.value)}>
            <MenuItem value="users">Users</MenuItem>
            <MenuItem value="groups">Groups</MenuItem>
          </Select>
          <NxButton
            text="Add group"
            onClick={() => GroupDialogStore.open()}
            className="mr-1"
          />
          <NxButton text="Add user" onClick={() => GroupDialogStore.open()} />
        </Grid>
        <Grid item xs={12}>
          <GroupList />
        </Grid>
      </Grid>
      <GroupDialog />
    </React.Fragment>
  )
})

export default UserGroupContainer


