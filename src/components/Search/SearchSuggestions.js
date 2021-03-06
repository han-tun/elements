import React from 'react';
import { ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox';

const SearchSuggestions = ({ suggestions, setSearchInput, zIndex }) => {
  let items;
  if (suggestions && suggestions.length > 0) {
    items = suggestions.map((suggestion) => {
      return (
        <ComboboxOption
          style={{ listStyleType: 'none' }}
          key={suggestion.id}
          value={suggestion.place_name}
          onClick={() => {
            setSearchInput(suggestion.place_name);
          }}
        >
          {suggestion.place_name}
        </ComboboxOption>
      );
    });

    return (
      // to do: how to put style into theme or sx syntax
      <ComboboxPopover style={{ backgroundColor: '#fff', zIndex }}>
        <ComboboxList
          style={{ padding: 4, fontSize: 10 }}
          aria-labelledby="search"
        >
          {items}
        </ComboboxList>
      </ComboboxPopover>
    );
  }
  return null;
};

export default SearchSuggestions;
