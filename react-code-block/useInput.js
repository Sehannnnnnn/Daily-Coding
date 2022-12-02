//이 곳에 input custom hook을 만들어 보세요.
//return 해야 하는 값은 배열 형태의 값이어야 합니다.

import { useState, useCallback, useEffect } from "react";

function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInput;
