import { useCallback, useState } from "react"

const useInput = (initValue: string) =>{
    const [value, setValue] = useState(initValue)
    const onChange = useCallback(
      (e: any) => {
        setValue(e.target.value)
      },
      [value],
    )

    return {value, onChange}
  }
  export default useInput;