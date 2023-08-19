import { useState } from "react";

export function useMenuOpen(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return [isOpen, ,setIsOpen,toggle];
}

