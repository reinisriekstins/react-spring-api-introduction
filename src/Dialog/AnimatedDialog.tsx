import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import { animated, useSpring } from "@react-spring/web";

const AnimatedDialogContent = animated(Dialog.Content);
const AnimatedDialogOverlay = animated(Dialog.Overlay);

const AnimatedDialogDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const modalContentSpring = useSpring({
    top: isOpen ? '50%' : '65%',
    opacity: isOpen ? 1 : 0,
  });

  return (
    <>
      <button
        className="Button violet"
        onClick={() => setIsOpen(true)}
      >
        Edit profile
      </button>
      <Dialog.Root
        open={isOpen}
        onOpenChange={open => setIsOpen(open)}
      >
        <Dialog.Portal>
          <AnimatedDialogOverlay className="DialogOverlay" style={{ opacity: modalContentSpring.opacity }} />
          <AnimatedDialogContent className="DialogContent" style={modalContentSpring}>
            <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name
              </label>
              <input className="Input" id="name" defaultValue="Pedro Duarte" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="username">
                Username
              </label>
              <input className="Input" id="username" defaultValue="@peduarte" />
            </fieldset>
            <div
              style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
            >
              <Dialog.Close asChild>
                <button className="Button green">Save changes</button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </AnimatedDialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default AnimatedDialogDemo;
