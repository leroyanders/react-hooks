import { useEffect } from 'react'

function useBrowserHistory(name, isActive, onBack, onForward) {
  function handleBack() {
    if (window.history.state && window.history.state[name]) window.history.go(-1)
    if (onBack) onBack()
  }

  function handleForward() {
    if (onForward) onForward()
  }

  function handlePopState(event) {
    if (!event.state || !event.state[name]) handleBack()
    else handleForward()
  }

  useEffect(() => {
    window.addEventListener('popstate', handlePopState)

    if (isActive && (!window.history.state || !window.history.state[name])) {
      window.history.pushState({
        ...window.history.state,
        [name]: true
      }, '')
    }

    return () => {
      window.removeEventListener('popstate', handlePopState)
      if (isActive) handleBack()
    }
  }, [isActive])
  return [handleBack, handleForward]
}

export default useBrowserHistory;