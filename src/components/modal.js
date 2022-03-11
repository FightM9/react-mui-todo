/**
 * Opens modal window with input
 */

let message = 'Change task name'

 export const openModalInput = function(value = '') {
     let result = prompt(message, value);
     return result === null ? value : result;
 }