import { Component, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  declare props: Readonly<Props>;
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6 text-center px-4">
          <p className="text-xl font-medium text-pine-900">This page failed to load.</p>
          <p className="text-dim">A network issue may have interrupted the page. Try reloading.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-pine-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-pine-700 transition-colors"
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
