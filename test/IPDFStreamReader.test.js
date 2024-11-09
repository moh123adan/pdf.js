import { expect } from 'chai';
import { IPDFStreamReader } from '../src/interfaces'; // Update path based on actual location

describe('IPDFStreamReader Interface', () => {
    let mockReader;

    beforeEach(() => {
        mockReader = new IPDFStreamReader();
    });

    it('should initially set contentLength to 0', () => {
        expect(mockReader.contentLength).to.equal(0);
    });

    it('should support a progress callback', () => {
        mockReader.onProgress = (progress) => {
            expect(progress.loaded).to.be.a('number');
        };
        mockReader.onProgress({ loaded: 50 });
    });

    it('should return a promise when calling headersReady', async () => {
        const headers = await mockReader.headersReady;
        expect(headers).to.be.undefined; // Replace with appropriate check.
    });
});
