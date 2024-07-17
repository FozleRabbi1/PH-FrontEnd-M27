export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse = {
  data?: any; // আপাতত any type দেয়া আছে পরে change করে দিতে হবে
  error?: TError;
};
