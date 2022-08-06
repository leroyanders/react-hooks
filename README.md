# React's most useful hooks

+ [Hooks](#hooks)
  - [useArray](#usearray)
  - [useBrowserHistory](#usebrowserhistory)
  - [useClientOnline](#useclientonline)
  - [useClipboard](#useclipboard)
  - [useCookieStorage](#usecookiestorage)
  - [useEventListener](#useeventlistener)
  - [usePrevious](#useprevious)
  - [useRenderCount](#userendercount)
  - [useLocalStorage](#uselocalstorage)
  - [useSessionStorage](#usesessionstorage)
  - [useToggle](#usetoggle)

<div id="hook">

# useArray

```javascript
const [array, setArray] = useArray(defaultValue)
```


# useBrowserHistory

```javascript
const [handleBack, handleForward] = useBrowserHistory(name, isActive, onBack, onForward);
```

# useClientOnline

```javascript
const online = useOnlineStatus() // boolean (true, false)
```

# useClipboard

```javascript
const [copyToClipboard, { success }] = useCopyToClipboard()
```

How to use:
```javascript
<button onClick={() => copyToClipboard("This was copied")}>
  {success ? "Copied" : "Copy Text"}
</button>
```

# useCookieStorage

```javascript
const [cookie, setCookie] = useCookie();
```

# useEventListener

```javascript
useEventListener("clieck", e => {
    console.log(e.target)
})
```

# usePrevious

```javascript
const previousValue = usePrevious(value)
```


# useRenderCount

```javascript
const count = useRenderCount() // integer
```

# useLocalStorage

```javascript
const [name, setName] = useLocalStorage()
```

# useSessionStorage

```javascript
const [name, setName] = useSessionStorage()
```

# useToggle

```javascript
const [value, toggleValue] = useToggle(false)
```

</div>
