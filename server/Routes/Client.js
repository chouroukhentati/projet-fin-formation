const auth = async () => {
    try {
      const res = await axios.get('/authenticate', { auth: { Email: 'admin', Passeword: '123' } });
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };