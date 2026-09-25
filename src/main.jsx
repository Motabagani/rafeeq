import { createRoot } from 'react-dom/client';
import RafeeqApp from './rafeeq/App.jsx';

// Standalone entry. Rafeeq manages its own theme, language (dir), routing and
// storage internally, so we just mount it.
createRoot(document.getElementById('root')).render(<RafeeqApp />);
