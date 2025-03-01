





//error handling utility
export const handleError = (error: unknown) => {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(`Error: ${error.message}`);
    } else if (typeof error === "string") {
      console.error(error);
      throw new Error(`Error: ${error}`);
    } else {
      console.error(error);
      throw new Error(`Unknown error: ${JSON.stringify(error)}`);
    }
  };