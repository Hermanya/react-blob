# Changelog

## 2.1.0
- added animation props:
  ```
  /**
   * Default is "15s"
   */
  animationDuration?: string;
  /**
   * Default is "linear"
   */
  animationTimingFunction?: "ease" | "linear" | "ease-in-out";
  /**
   * Default is undefined, but you could set it to something like "2s"
   */
  animationDelay?: string;
  /**
   * Default is "infinite"
   */
  animationIterationCount?: "infinite" | number;
  ```

## 2.0.0
- added proper TS types
