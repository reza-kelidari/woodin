/**
 * Simulates form event
 *
 * @returns {Promise<void>}
 */
export const formAction = async (): Promise<void> => {
  await new Promise<void>((done) =>
    setTimeout(() => {
      done();
    }, 2000)
  );

  return;
};
