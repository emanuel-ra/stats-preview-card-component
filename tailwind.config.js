/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: theme => ({
        'Inter':['Inter', 'sans-serif'] ,
        'LexendDeca':['Lexend Deca', 'sans-serif'] ,
      }),
      textColor:{
        skin:{
          'very-dark-blue':'var(--very-dark-blue)',
          'dark-desaturated-blue':'var(--dark-desaturated-blue)',
          'soft-violet':'var(--soft-violet)',       
          'slightly-transparent-white-main-paragraph':'var(--slightly-transparent-white-main-paragraph)',
          'slightly-transparent-white-stat-headings':'var(--slightly-transparent-white-stat-headings)',
        },
      },
      backgroundColor:{
        skin:{
          'very-dark-blue':'var(--very-dark-blue)',
          'dark-desaturated-blue':'var(--dark-desaturated-blue)',
          'soft-violet':'var(--soft-violet)',       
          'slightly-transparent-white-main-paragraph':'var(--slightly-transparent-white-main-paragraph)',
          'slightly-transparent-white-stat-headings':'var(--slightly-transparent-white-stat-headings)',
        }
      },    
    },
  },
  plugins: [],
}
