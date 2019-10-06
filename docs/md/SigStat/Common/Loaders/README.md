# [SigStat.Common.Loaders](./README.md)

## Types

- <sub>[`DataSetLoader`](./DataSetLoader.md)</sub>
	- Abstract loader class to inherit from. Implements ILogger.
- <sub>[`IDataSetLoader`](./IDataSetLoader.md)</sub>
	- Exposes a function to enable loading collections of [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md)s.  Base abstract class: [Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md).
- <sub>[`ImageLoader`](./ImageLoader.md)</sub>
	- DataSetLoader for Image type databases.  Similar format to Svc2004Loader, but finds png images.
- <sub>[`ImageSaver`](./ImageSaver.md)</sub>
	- Get the [Features.Image](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) of a [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) and save it as png file.
- <sub>[`MCYTLoader`](./MCYTLoader.md)</sub>
	- [Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the MCYT dataset
- <sub>[`SigComp11ChineseLoader`](./SigComp11ChineseLoader.md)</sub>
	- [Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp11Chinese dataset
- <sub>[`SigComp11DutchLoader`](./SigComp11DutchLoader.md)</sub>
	- [Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp11Dutch dataset
- <sub>[`SigComp13JapaneseLoader`](./SigComp13JapaneseLoader.md)</sub>
	- [Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp13Japanese dataset
- <sub>[`SigComp15GermanLoader`](./SigComp15GermanLoader.md)</sub>
	- [Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp15German dataset
- <sub>[`SigComp19OnlineLoader`](./SigComp19OnlineLoader.md)</sub>
	- [Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp19 dataset
- <sub>[`Svc2004`](./Svc2004.md)</sub>
	- Set of features containing raw data loaded from SVC2004-format database.
- <sub>[`Svc2004Loader`](./Svc2004Loader.md)</sub>
	- Loads SVC2004-format database from .zip

