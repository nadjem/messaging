const messagesActions = {};

messagesActions.setMessages = (dispath, data) => {
  dispath({
    type: 'SET_MESSAGES',
    values: data,
  });
};


export default messagesActions;