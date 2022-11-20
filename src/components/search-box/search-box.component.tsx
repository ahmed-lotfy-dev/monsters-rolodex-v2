import { ChangeEvent , } from "react";

import "./search-box.styles.css";

// interface ISearchBoxProps {
//   className: string,
//   placeholder?: string 
//   onChangeHandler:
// }

// interface ISearchBoxProps{
//   onChangeHandler : (a:string) => void
// }

type SearchBoxProps = {
  className: string,
  placeholder?: string,
  // using ur own function type to be more generic if uwant
  onChangeHandler: (event:ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
