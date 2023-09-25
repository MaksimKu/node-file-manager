const getUserName = () => {
    const args = process.argv;
    let name;
    for (let i = 0; i < args.length; i++) {
      if (/^--username/.test(args[i])) {
        name = args[i].split('=')[1];
        break
      }
    }
    return name || 'Anonymous';
  };
  export default getUserName;