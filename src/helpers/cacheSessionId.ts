export const cache = () => {
  const  root  = localStorage.getItem('persist:root') ? JSON.parse(localStorage.getItem('persist:root') || '') : '' ;
  console.log(root)
  return root ? JSON.parse(root.sessionId) : '' ;
};

export const getSessionId = () => {  
  const { sessionId } = cache();
  return sessionId;
};
