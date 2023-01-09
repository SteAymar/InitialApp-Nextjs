import * as React from 'react';


type Props = {
  children?: React.ReactNode
};

export const DarkLayout: React.FC <Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius:"10px",
        padding:'10px',
    }}>
        <h3>Dark-Layout</h3>

        <div>
            {children}
        </div>
    </div>
  )
}
