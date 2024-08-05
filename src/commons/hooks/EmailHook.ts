const handleEmailClick = () => {
    const email = 'johntetteh090@gmail.com';
    const subject = 'Subject';
    const body = 'Talk to me';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  export default handleEmailClick;