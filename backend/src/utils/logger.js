const logger = {
  info: (message) => {
    console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
  },
  
  error: (message, error) => {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    if (error) {
      console.error(error);
    }
  },
  
  debug: (message, data) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[DEBUG] ${new Date().toISOString()}: ${message}`);
      if (data) {
        console.log(data);
      }
    }
  }
};

export default logger;