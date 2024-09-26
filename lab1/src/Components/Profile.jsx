import React from 'react';

function Profile() {
  return (
    <section className="card">
      <table className="profile-table">
        <tbody>
          <tr>
            <td>Name:</td>
            <td>Oleg</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>Ukraine</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Profile;