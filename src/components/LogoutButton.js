import { useAuth0 } from '@auth0/auth0-react'


function LoginButton() {
  const { logout, isAuthenticated, user } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()}>
        {user.name}
      </button>
    )
  )
}

export default LoginButton