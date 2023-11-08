import React, { useState } from 'react';

const InstagramFollowerCheck = () => {
  const [isFollowing, setIsFollowing] = useState(null);

  const checkFollowers = async () => {
    try {
      const instagramUserId = 'stunly_agency'; // Your Instagram Account ID
      const accessToken = 'IGQWRQOHh0THNzeTNmWk9STVpnNnJWemhraFNzNmU2N1haakEwUXRGRkc2UDZAxdG8yWFhhaVZAGaHpLR21jZAHhjUTFNbElQcUFmazBFaVNMdXozS2RnTGhKM3VDQWdCQ01qUnpCaEwtdUlsVXFWQ2t0VDFwdEJ3OFkZD'; // Your Instagram API Access Token

      const response = await fetch(
        `https://graph.instagram.com/v12.0/the_vikas_saini/follows?user_id=${instagramUserId}&access_token=${accessToken}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        if (data.data.length > 0) {
          setIsFollowing(true);
        } else {
          setIsFollowing(false);
        }
      } else {
        console.error('Error checking followers:', response.statusText);
        setIsFollowing(false); // Set to false in case of an error
      }
    } catch (error) {
      console.error('Error checking followers:', error);
      setIsFollowing(false); // Set to false in case of an error
    }
  };

  return (
    <div className="follower-check">
      <h1>Check if you follow my Instagram account</h1>
      <button onClick={checkFollowers}>Check Now</button>
      {isFollowing === true && (
        <p className="success">You follow my Instagram account! Here's the link: <a href="https://www.instagram.com/your_account_name/">Instagram</a></p>
      )}
      {isFollowing === false && <p className="warning">You do not follow my Instagram account.</p>}
      {isFollowing === null && <p className="info">Click "Check Now" to see if you follow my Instagram account.</p>}
    </div>
  );
};

export default InstagramFollowerCheck;
