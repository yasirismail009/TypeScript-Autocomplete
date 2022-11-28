import { Grid } from "@mui/material";
import React from "react";

export default function FeedbackComponent() {
  return (
    <div className="w-full flex justify-end items-end mt-20" id="feedback">
      <div className="bg-primary-dark lg:w-2/4 sm:w-full w-full p-8 lg:px-20 rounded-xl shadow-inner">
        <p className="text-4xl text-primary-main font-bold mb-2">Feedback</p>
        <p className="ml-4 text-lg text-primary-main font-medium mb-4">
          Tells us what we can improve for you
        </p>
        <div>
          <form>
            <Grid container spacing={2} className="justify-center items-center">
              <Grid item lg={6} xs={12}>
                <div class="lg:mb-6 sm:mb-2 mb-2">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-primary-main dark:text-white"
                  >
                    Full Name<span className="text-[#ffc200]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-main dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name here"
                    required
                  />
                </div>
              </Grid>
              <Grid item lg={6} xs={12}>
                <div class="lg:mb-6 sm:mb-4 mb-4">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email <span className="text-[#ffc200]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-main dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </Grid>
            </Grid>

            <div class="lg:mb-6 sm:mb-6 mb-6">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message<span className="text-[#ffc200]">*</span>
              </label>
              <input
                type="text"
                id="message"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-main dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your message here"
                required
              />
            </div>

            <button
              type="submit"
              class="text-primary-dark font-bold bg-[#ffc200] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#ffc200] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
