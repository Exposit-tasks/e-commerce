import { useSelector } from 'react-redux'

import { ProfileNotRegistered, ProfileRegistered } from '../../components'

import './index.scss'

const ProfileScreen = () => {
  const { user } = useSelector(state => state.user)

  return user ? <ProfileRegistered /> : <ProfileNotRegistered />
}

export default ProfileScreen
