import { LoadingComponent } from '@/components/LoadingComponent'
import { useAppContext } from '@/context/AppContext'
import { useEffect } from 'react'

function AuthPage({ children }: { children: JSX.Element }) {
  const { user, getLoggedUser } = useAppContext()

  useEffect(() => {
    getLoggedUser()
  }, [])

  if (!user) {
    return <LoadingComponent />
  }

  return <>{children}</>
}

export default AuthPage
