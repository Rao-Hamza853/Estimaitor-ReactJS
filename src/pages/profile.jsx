import MyProfile from '../components/my-profile'
import ProfileNavbar from '../components/profile-navbar'

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <ProfileNavbar/>
      <MyProfile/>
    </>
  )
}

export default Profile
