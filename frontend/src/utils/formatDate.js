export const formatDate = (date, config) => {
 const defaultIOptions = {day: 'numeric', month: 'long', year: 'numeric'}

 const options = config ? config : defaultIOptions;
 return new Date(date).toLocaleDateString("en-US", options);
}