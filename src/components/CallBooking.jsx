import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CallBookingSection = styled.section`
  background-color: white;
  text-align: center;
`;

const CallBookingTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const CallBookingText = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const BookCallButton = styled(motion.button)`
  font-size: 1.2rem;
  padding: 15px 30px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AvailabilityInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 20px;
`;

function CallBooking() {
  return (
    <CallBookingSection id="book-call">
      <div className="container">
        <CallBookingTitle>Let's Talk</CallBookingTitle>
        <CallBookingText>
          Ready to discuss your project? Book a call with me and let's explore how we can work together to bring your ideas to life.
        </CallBookingText>
        <BookCallButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Call
        </BookCallButton>
        <AvailabilityInfo>
          Available Monday to Friday, 9 AM - 5 PM EST
        </AvailabilityInfo>
      </div>
    </CallBookingSection>
  );
}

export default CallBooking;
