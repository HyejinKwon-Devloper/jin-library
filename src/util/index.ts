function throttle(callback: (args: any) => any, delay: number = 1000) {
  let timer: null | NodeJS.Timeout = null;
  let ready = true;
  return (args: any) => {
    if (timer !== null) return;
    if (!ready) return;

    callback(args);
    ready = false;
    timer = setTimeout(() => {
      timer = null;
      ready = true;
    }, delay);
  };
}
