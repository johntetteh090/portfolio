import { useEffect } from 'react';

const useIntersectionObserver = (setActiveSection: React.Dispatch<React.SetStateAction<string>>): void => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    if (sections.length === 0) {
      console.error('No sections found to observe');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, // Adjust as needed
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setActiveSection]);
};

export default useIntersectionObserver;
