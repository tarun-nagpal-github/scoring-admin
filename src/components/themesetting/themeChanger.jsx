import React, { useMemo } from 'react';
import IntlMessages from 'util/intlMessages';

export default ({ config, changeTheme, selectedId, themeType = null }) => {
  const { id, label, options } = config;
  let optionList = useMemo(() => {
    if(themeType === "gredient") {
      return options.filter(a=> a.hasOwnProperty('type') && a.type === 'gredient');
    } else {
      return options.filter(a=> !a.hasOwnProperty('type'));
    }
  }, [themeType, options]);

  return (
    <div className="themeChangeBlock">
      <h4>
        <IntlMessages id={label} />
      </h4>
      <div className="themeChangeBtnWrapper">
        {
          optionList && optionList.map(option => {
            const { themeName, buttonColor } = option;
            const onClick = () => {
              changeTheme(id, themeName);
            };
            const customClass = themeName === selectedId ? 'selectedTheme' : '';
            return (
              <button
                type="button"
                key={themeName}
                onClick={onClick}
                className={customClass}
                style={{ background: buttonColor }}
              />
            );
          })
        }
      </div>
    </div>
  );
};
