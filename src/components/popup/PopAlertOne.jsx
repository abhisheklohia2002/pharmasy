import React, { useState } from 'react';
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

const AlertPopExample = ({otp,msg,OTP}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleConfirm = () => {
    // Perform your action here
    console.log('Confirmed');
    onClose();
  };

  return (
    <>
      
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Email Verification
            </AlertDialogHeader>

            <AlertDialogBody>
{msg} <br/>
<b>
   {OTP}
</b>
<span style={{paddingLeft:"0.5rem"}}>
{otp}
</span>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleConfirm} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AlertPopExample;
