exports.logger = async (text) => {
  try {
    // Placeholder logic for chatbot response, replace with actual chatbot processing logic
    let response;

    response = `[${new Date().toISOString()}] ${text}`;
    // console log text and timestamp
    console.log(`[${new Date().toISOString()}] ${text}`);

    return response;
  } catch (error) {
    throw new Error("Error processing logger response");
  }
};
