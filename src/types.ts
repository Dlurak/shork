type AlphabeticKeys =
	| "a"
	| "A"
	| "b"
	| "B"
	| "c"
	| "C"
	| "d"
	| "D"
	| "e"
	| "E"
	| "f"
	| "F"
	| "g"
	| "G"
	| "h"
	| "H"
	| "i"
	| "I"
	| "j"
	| "J"
	| "k"
	| "K"
	| "l"
	| "L"
	| "m"
	| "M"
	| "n"
	| "N"
	| "o"
	| "O"
	| "p"
	| "P"
	| "q"
	| "Q"
	| "r"
	| "R"
	| "s"
	| "S"
	| "t"
	| "T"
	| "u"
	| "U"
	| "v"
	| "V"
	| "w"
	| "W"
	| "x"
	| "X"
	| "y"
	| "Y"
	| "z"
	| "Z"
	| "ö"
	| "ä"
	| "ü"
	| "Ö"
	| "Ä"
	| "Ü"
	| "ß";

type NumericKeys = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";

type SpecialKeys =
	| "!"
	| '"'
	| "§"
	| "$"
	| "%"
	| "&"
	| "/"
	| "("
	| ")"
	| "="
	| "?"
	| "{"
	| "["
	| "]"
	| "}"
	| "Delete"
	| "PageDown"
	| "PageUp"
	| "Enter";

type Modifier = "Control" | "Meta" | "CapsLock" | "Escape";

type Arrow = `Arrow${"Left" | "Right" | "Up" | "Down"}`;

type Key = AlphabeticKeys | NumericKeys | SpecialKeys | Modifier | Arrow;

export type Shortcut = {
	keys: Key[];
	action: (e: KeyboardEvent) => void;
	preventDefault?: boolean;
};
