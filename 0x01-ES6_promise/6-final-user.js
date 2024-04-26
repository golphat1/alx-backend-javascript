import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
 * 
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The file name for the photo.
 * @returns {Promise<Array>} - A promise that resolves to an array of objects containing status and value.
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }));
    });
}
