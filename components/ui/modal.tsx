import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-[720px]">
        <div className="flex w-full items-center overflow-scroll">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
