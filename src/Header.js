import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>SuccesObject</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: '45px',
    fontWeight: 'bold',
  },
};

export default Header;