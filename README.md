<b>
  <i>React hooks collection:</i>
</b>

# 1. useArray

```javascript
const [array, setArray] = useArray(defaultValue)
```


# 2. useBrowserHistory

```javascript
const [handleBack, handleForward] = useBrowserHistory(name, isActive, onBack, onForward);
```

# 3. useClientOnline

```javascript
const online = useOnlineStatus() // boolean (true, false)
```

# 4. useClipboard

```javascript
const [copyToClipboard, { success }] = useCopyToClipboard()
```

How to use:
```javascript
<button onClick={() => copyToClipboard("This was copied")}>
  {success ? "Copied" : "Copy Text"}
</button>
```

# 5. useCookieStorage

```javascript
const [cookie, setCookie] = useCookie();
```

# 6. useEventListener

```javascript
useEventListener("clieck", e => {
    console.log(e.target)
})
```

# 7. usePrevious

```javascript
const previousValue = usePrevious(value)
```


# 8. useRenderCount

```javascript
const count = useRenderCount() // integer
```

# 9. useLocalStorage

```javascript
const [name, setName] = useLocalStorage()
```

# 10. useSessionStorage

```javascript
const [name, setName] = useSessionStorage()
```

# 11. useToggle

```javascript
const [value, toggleValue] = useToggle(false)
```
