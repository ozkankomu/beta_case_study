export const cache = () => {
  const  root  = JSON.parse(localStorage.getItem('persist:root') || '' );
  return root ? JSON.parse(root.root) : '' ;
};

export const getSessionId = () => {
  const { sessionId } = cache();
  return sessionId;
};
