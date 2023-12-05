**When ever you use the ClickOutside function you have to remember that you have to gave ref in parent component .**

> [!NOTE]
> **Inside the parent component you have to sepecified the click event who open and close the child element**

Example:-

```javascript
import React, { useRef, useState } from "react";
import ClickOutside from "../../utilities/ClickOutside";
import { FilterContainer } from "./animationStyles";
import { Button } from "antd";
const FilterAnimation = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const parentRef = useRef();

  const clickOutsideHandler = () => {
    setFilterVisible(false);
  };
  ClickOutside(clickOutsideHandler, parentRef);

  return (
    <div ref={parentRef}>
      <Button
        onClick={() => {
          setFilterVisible(!filterVisible);
        }}
      >
        Toggle Filter
      </Button>
      <FilterContainer className={filterVisible ? "in" : "out"}>
        <button onClick={clickOutsideHandler}>X</button>Filter
      </FilterContainer>
    </div>
  );
};

export default FilterAnimation;
```

**Here is a Clickoutside function**

> [!NOTE]
> It will take two arguments as a parameter first is a function and secound is a ref of parent component.

```javascript
import { useEffect, useCallback } from "react";

const ClickOutside = (outSide, parentRef) => {
  const handleClickOutside = useCallback(
    (e) => {
      if (parentRef.current && !parentRef.current.contains(e.target)) {
        outSide && outSide();
      }
    },
    [parentRef, outSide]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default ClickOutside;
```
