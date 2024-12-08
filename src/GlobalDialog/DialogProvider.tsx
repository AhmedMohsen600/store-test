import { FC, ReactNode, useState } from 'react';

import { Heading3, Text } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@/components/ui/drawer';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { DialogContext, GlobalDialogContent } from './DialogContext';
import { useMediaQuery } from '@/hooks/use-media-query';
import { SuccessIcon } from '@/components/icons/SuccessIcon';
import { DangerIcon } from '@/components/icons/DangerIcon';

export const DialogProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<GlobalDialogContent | null>(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const showDialog = (newContent: GlobalDialogContent) => {
    setContent(newContent);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <DialogContext.Provider
      value={{
        isOpen,
        setIsOpen,
        content,
        onCancel: closeDialog,
        onClose: closeDialog,
        show: showDialog,
      }}
    >
      {children}
      {isOpen && content && isDesktop && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className='block max-w-[475px] p-0' hideCloseButton>
            <DialogTitle asChild>
              <VisuallyHidden>{content.title}</VisuallyHidden>
            </DialogTitle>
            <DialogDescription asChild>
              <VisuallyHidden>{content.desc}</VisuallyHidden>
            </DialogDescription>
            <DialogHeader className='block px-8 pt-8 mb-6'>
              <div className='flex justify-center'>
                {content.type === 'custom' && content.customIcon}
                {content.type === 'success' && <SuccessIcon />}
                {content.type === 'destructive' && <DangerIcon />}
                {content.type === 'info' && ''}
              </div>
            </DialogHeader>
            <div className='px-8 pb-6'>
              <Heading3 className='mb-1 text-center'>{content.title}</Heading3>
              <Text className='text-center'>{content.desc}</Text>
              {content.children}
            </div>
            <DialogFooter className='flex gap-4 p-8 pt-6 border-t'>
              <Button
                variant={content.actionType ?? 'Tertiary'}
                className='w-full border-primary-300'
                onClick={() => setIsOpen(false)}
              >
                {content.actionText}
                {!content.actionText && content.type === 'success' && 'done'}
                {!content.actionText && content.type !== 'success' && 'cancel'}
              </Button>
              {content.componentType === 'alert' && (
                <Button
                  className='w-full'
                  onClick={() => {
                    content.onConfirm?.();
                    setIsOpen(false);
                  }}
                >
                  {content.confirmBtnText || 'yes'}
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      {isOpen && content && !isDesktop && (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className='block p-0'>
            <DrawerHeader className='block px-8 pt-8 mb-6'>
              <div className='flex justify-center'>
                {content.type === 'custom' && content.customIcon}
                {content.type === 'success' && <SuccessIcon />}
                {content.type === 'destructive' && <DangerIcon />}
                {content.type === 'info' && ''}
              </div>
            </DrawerHeader>
            <div className='px-4 pb-10'>
              <Heading3 className='mb-1 text-center'>{content.title}</Heading3>
              <Text className='text-center'>{content.desc}</Text>
              {content.children}
            </div>
            <DrawerFooter className='p-4 border-t'>
              {content.componentType === 'alert' && (
                <div className='flex-1'>
                  <DrawerClose className='w-full'>
                    <Button className='w-full' onClick={content.onConfirm}>
                      {content.confirmBtnText || 'yes'}
                    </Button>
                  </DrawerClose>
                </div>
              )}
              <DrawerClose className='flex-1'>
                <Button
                  variant={content.actionType ?? 'Tertiary'}
                  className='w-full border-primary-300'
                >
                  {content.actionText}
                  {!content.actionText && content.type === 'success' && 'done'}
                  {!content.actionText &&
                    content.type !== 'success' &&
                    'cancel'}
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </DialogContext.Provider>
  );
};
